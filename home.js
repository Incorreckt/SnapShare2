// Simulated data for sample photos
const photos = [
    { id: 1, title: 'Beautiful Landscape', description: 'A breathtaking view of mountains and clouds.', likes: 20, comments: ['Amazing shot!', 'I love the colors!'] },
    { id: 2, title: 'City Lights', description: 'The city skyline illuminated at night.', likes: 15, comments: ['Great perspective!', 'Awesome shot!'] },
    { id: 3, title: 'Sunset on the Beach', description: 'Golden hues reflecting on the waves.', likes: 25, comments: ['Absolutely stunning!', 'Makes me want to go on vacation!'] }
];

// Function to display photos on the page
function displayPhotos() {
    const photoGrid = document.querySelector('.photo-grid');

    // Clear existing content
    photoGrid.innerHTML = '';

    // Loop through each photo and create a photo card
    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        // Image
        const img = document.createElement('img');
        img.src = `photos/${photo.id}.jpg`;
        img.alt = photo.title;
        photoCard.appendChild(img);

        // Photo info
        const photoInfo = document.createElement('div');
        photoInfo.classList.add('photo-info');

        // Title
        const title = document.createElement('h3');
        title.textContent = photo.title;
        photoInfo.appendChild(title);

        // Description
        const description = document.createElement('p');
        description.textContent = photo.description;
        photoInfo.appendChild(description);

        // Like button
        const likeButton = document.createElement('button');
        likeButton.textContent = `Like (${photo.likes})`;
        likeButton.addEventListener('click', () => {
            photo.likes++;
            likeButton.textContent = `Like (${photo.likes})`;
        });
        photoInfo.appendChild(likeButton);

        // Comments
        photo.comments.forEach(comment => {
            const commentText = document.createElement('p');
            commentText.textContent = comment;
            photoInfo.appendChild(commentText);
        });

        // Comment input and button
        const commentInput = document.createElement('input');
        commentInput.placeholder = 'Add a comment...';
        photoInfo.appendChild(commentInput);

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', () => {
            if (commentInput.value.trim() !== '') {
                photo.comments.push(commentInput.value.trim());
                const newComment = document.createElement('p');
                newComment.textContent = commentInput.value.trim();
                photoInfo.appendChild(newComment);
                commentInput.value = '';
            }
        });
        photoInfo.appendChild(commentButton);

        photoCard.appendChild(photoInfo);
        photoGrid.appendChild(photoCard);
    });
}

// Call the displayPhotos function when the page loads
window.addEventListener('load', displayPhotos);
