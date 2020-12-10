import {GetSortedPostsData} from 'lib/posts'
import {ViewCounter} from './view-counter'
import tw, {styled} from 'twin.macro'

const PostItemWrapper = styled.div`
  grid-template-areas:
    'title views'
    'description description';
  ${tw`prose cursor-pointer gap-2 py-4 flex flex-col sm:grid`};
`

export function PostItem({id, title, description}: GetSortedPostsData) {
  return (
    <PostItemWrapper>
      <span
        style={{gridArea: 'title'}}
        className="text-xl sm:text-2xl text-gray-900 font-bold leading-tight"
      >
        {title}
      </span>
      <ViewCounter className="ml-auto" style={{gridArea: 'views'}} id={id} />
      <p style={{gridArea: 'description'}} tw="mt-0!">
        {description}
      </p>
    </PostItemWrapper>
  )
}
