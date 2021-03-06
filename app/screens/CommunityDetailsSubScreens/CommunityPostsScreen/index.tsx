import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ActivityIndicator, ItemSeparator, Post } from '../../../components';
import { theme } from '../../../config';
import NavRoutes from '../../../navigation/NavRoutes';
import { fetchCommunityPosts, likePost } from '../../../store/reducers';
import { useAppDispatch, useAppSelector } from '../../../store';

export default function CommunityPostsScreen({ communityId }) {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { entities } = useAppSelector((state) => state.Post);
  const posts = Object.values(entities)
    .filter((post) => post.community._id === communityId)
    .sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1));

  const handleLikePress = async (postId) => {
    dispatch(
      likePost({
        postId,
        likeOption: !entities[postId].isLikedByCurrentUser ? 'like' : 'unlike',
      }),
    );
  };

  const renderItem = ({ item }) => (
    <Post
      touchDisabled={false}
      content={item.content}
      commentCount={item.commentCount}
      communityName={item.community.name}
      postedAgo={item.createdAt}
      title={item.title}
      username={item.postedBy.name}
      voteCount={item.voteCount}
      onLikePress={() => handleLikePress(item._id)}
      isPostLiked={item.isLikedByCurrentUser}
      onPress={() => {
        navigation.navigate(NavRoutes.POST_DETAILS, item._id);
      }}
      isProfileFeed={false}
      isCommunityFeed={true}
      postType={item.postType}
      asPseudo={item.asPseudo}
      pseudonym={item.postedBy.pseudonym}
    />
  );

  const getCommunityFeed = async () => {
    setIsRefreshing(true);

    const response = await dispatch(fetchCommunityPosts(communityId));
    if ('error' in response) {
      console.log('Feed fetch error', response.error);
    }
    setIsLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    getCommunityFeed();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={posts}
      ItemSeparatorComponent={() => (
        <ItemSeparator height={8} color={theme.grey3} />
      )}
      keyExtractor={(post) => post._id}
      refreshing={isRefreshing}
      onRefresh={() => {
        getCommunityFeed();
      }}
      renderItem={renderItem}
    />
  );
}
