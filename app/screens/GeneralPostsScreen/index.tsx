import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ItemSeparator, Post } from '../../components';
import { theme } from '../../config';
import NavRoutes from '../../navigation/NavRoutes';

import { H5Bold } from '../../styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchUserPosts, likePost } from '../../store/reducers';

export default function GeneralPostsScreen({
  userId,
  isCommunityFeed,
  isProfileFeed,
}) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(true);

  const { entities } = useAppSelector((state) => state.Post);
  const posts = Object.values(entities)
    .filter((post) => post.postedBy._id === userId)
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
      isCommunityFeed={isCommunityFeed}
      isProfileFeed={isProfileFeed}
      postType={item.postType}
      asPseudo={item.asPseudo}
      pseudonym={item.postedBy.name}
    />
  );

  const getProfessionalPosts = async () => {
    setIsRefreshing(true);

    const response = await dispatch(fetchUserPosts(userId));
    if ('error' in response) {
      console.log('Feed fetch error', response.error);
    }

    setIsRefreshing(false);
  };

  useEffect(() => {
    getProfessionalPosts();
  }, []);

  return (
    <>
      {isRefreshing && (
        <H5Bold align="center" color="grey5" mt="8px" mb="8px">
          Feed Loading........
        </H5Bold>
      )}

      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey3} />
        )}
        keyExtractor={(post) => post._id}
        refreshing={isRefreshing}
        onRefresh={() => {
          getProfessionalPosts();
        }}
        renderItem={renderItem}
      />
    </>
  );
}
