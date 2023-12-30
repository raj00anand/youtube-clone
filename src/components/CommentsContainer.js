import React from 'react'

const commentData = [
    {
        name: "Anand",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
            {
                name: "Anand",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
                    {
                        name: "Anand",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        replies: [
            
                        ]
                    }
            
                ]
            }
        ]
    },
    {
        name: "Anand",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
            {
                name: "Anand",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
            
                ]
            }
            
        ]
    },
    {
        name: "Anand",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
            
        ]
    },
    {
        name: "Anand",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
            
        ]
    }
]

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div className='flex bg-gray-100 p-1 rounded-lg my-1'>
            <img className="w-10 h-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt='logo'/>
            <div className='px-2'>
                <h6 className='text-sm font-bold'>{name}</h6>
                <p className='text-sm'>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => 
        <div key={index}>
             <Comment  data={comment}/>
             <div className='pl-2 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
             </div>
        </div>
        )
}

const CommentsContainer = () => {
  return (
    <div className='m-2 p-2'>
      <h1 className='font-bold'>Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
