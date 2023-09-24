import React from "react";

const commentsData = [
    {
        name: "Pooja Priya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
        replies: []
    },
    {
        name: "Pooja Priya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
        replies: [
            {
                name: "Pooja Priya",
                text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
                replies: [
                    {
                        name: "Pooja Priya",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Pooja Priya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
        replies: [{
            name: "Pooja Priya",
            text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
            replies: []
        },]
    },
    {
        name: "Pooja Priya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
        replies: [
            {
                name: "Pooja Priya",
                text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
                replies: []
            },
        ]
    },
    {
        name: "Pooja Priya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
        replies: [{
            name: "Pooja Priya",
            text: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
            replies: []
        },]
    }
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
            <img
              className="w-12 h-12" 
              alt="user"
              src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>

        </div>
    )
}

const CommentsList = ({ comments}) => {
    // disclaimer : don't use index as key
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentsList comments={comment.replies} />
            </div>
        </div>
        
    ));
};
const CommentsContainer = () => {
     return (
        <div className="m-5 p-2">
           <h3 className="text-1xl">Comments:</h3>
           <CommentsList comments={commentsData} />
        </div>
     )
}

export default CommentsContainer;