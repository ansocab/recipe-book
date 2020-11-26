import React, { useState, useEffect } from "react";
import "./Comments.css";
import StarRating from './StarRating'

export default function Comments() {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      email: "",
      title: "",
      comment: ""
    }
  )

  const updateFormData = event => {
    const {name, value} = event.target;
     setFormData(prevState => (
       {
         ...prevState,
         [name]:value
       }
     ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data= new FormData(event.target)
    // fetch('/path', {
    //   method: 'POST',
    //   body: data
    // })
    setFormData({
      firstName: "",
      email: "",
      title: "",
      comment: ""
    })
    console.log(formData)
  };

  return (
    <>
      <div id="respond" className="comment-respond">
        <h3 id="reply-title" className="comment-reply-title">
          <strong>Leave a</strong> comment
        </h3>
        <form
        onSubmit={handleSubmit}
          action="#"
          method="post"
          id="commentform"
          className="comment-form"
          autocomplete="off"
        >
          <div className="comment-form-left">
            <p className="comment-form-author">
              <label for="firstName">
                Name
              </label>
              <input
                value={formData.firstName}
                onChange={updateFormData}
                id="firstName"
                placeholder="name*"
                name="firstName"
                type="text"
                maxlength="245"
                autocomplete="nope"
                
              />
            </p>
            <p className="comment-form-email">
              <label for="email">
                Email
              </label>
              <input
                value={formData.email}
                onChange={updateFormData}
                id="email"
                placeholder="email*"
                name="email"
                type="text"
                maxlength="100"
                autocomplete="nope"
                
              />
            </p>
            <p className="comment-form-url">
              <label for="title">Title</label>
              <input
                value={formData.title}
                onChange={updateFormData}
                id="title"
                placeholder="title"
                name="title"
                type="text"
                maxlength="200"
                autocomplete="off"
              />
            </p>
          </div>

          <div className="comment-form-right">
            <p className="comment-form-comment">
              <label for="comment">Comment</label>
              <textarea
               value={formData.comment}
               onChange={updateFormData}
                placeholder="comment"
                id="comment"
                name="comment"
                cols="45"
                rows="8"
                maxlength="600"
                required="required"
              ></textarea>
            </p>
          </div>

          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              class="submit"
            />
          </p>
        </form>
        Rate this recipe <StarRating/>
      </div>
      <h1 className="title-comments">Comments</h1>
      {/*Comments Section*/}
      <ul className="comment-list">
        <li>
          <div class="comment-content">
            <div class="comment-block">
              <div class="comment-author">Rosemarie</div>
              <div class="email-fn">email@email.com</div>
              <div class="title-fn">Nice recipe! Like it!</div>
              <p>Thank you! Here's the comment field</p>
            </div>
            <div></div>
          </div>
        </li>
      </ul>
    </>
  );
}
