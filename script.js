// Scroll to Explore Section
function navigateToExplore() {
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Like Post Functionality
  function likePost(button) {
    const likeCountElem = button.nextElementSibling;
    let likes = parseInt(likeCountElem.textContent.split(' ')[0]);
    likes++;
    likeCountElem.textContent = `${likes} Likes`;
  }
  
  // Comment Post Functionality
  function commentPost(button) {
    const commentSection = button.parentElement.nextElementSibling;
    commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
  }
  
  // Submit Comment Functionality
  function submitComment(button) {
    const commentText = button.previousElementSibling.value.trim();
    const postedComments = button.nextElementSibling;
  
    if (commentText) {
      const newComment = document.createElement('p');
      newComment.textContent = commentText;
      postedComments.appendChild(newComment);
      button.previousElementSibling.value = ''; // Clear the input field after submission
    }
  }
  
  // Handle New Post Submission
  document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
  
    if (title && content) {
      const newPost = document.createElement('div');
      newPost.classList.add('post');
  
      newPost.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="post-interactions">
          <button class="like-btn" onclick="likePost(this)">Like</button>
          <span class="like-count">0 Likes</span>
          <button class="comment-btn" onclick="commentPost(this)">Comment</button>
          <span class="reward">Earn 0.5 APT</span>
        </div>
        <div class="comments-section" style="display: none;">
          <textarea placeholder="Write a comment..."></textarea>
          <button onclick="submitComment(this)">Submit</button>
          <div class="posted-comments"></div>
        </div>
      `;
  
      document.querySelector('.explore').appendChild(newPost);
      
      // Clear the form after submission
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
    } else {
      alert('Please fill out both the title and content fields.');
    }
  });
  
  // Handle Sign Up form submission
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value.trim();
    const password = event.target.querySelector('input[type="password"]').value.trim();
    
    if (email && password) {
      alert('Sign-up successful!');
      // Perform further actions such as saving user details or connecting to backend
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Handle Login form submission
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value.trim();
    const password = event.target.querySelector('input[type="password"]').value.trim();
  
    if (email && password) {
      alert('Login successful!');
      // Perform further actions such as user authentication
    } else {
      alert('Please fill out both fields.');
    }
  });
  