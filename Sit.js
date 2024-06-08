body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.thumbnails {
    display: flex;
    overflow-x: auto;
    margin-bottom: 20px;
}

.thumbnail {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.thumbnail:hover {
    transform: scale(1.1);
}

.full-image-container {
    max-width: 100%;
    display: flex;
    justify-content: center;
}

.full-image {
    max-width: 100%;
    height: auto;
    border: 2px solid #ccc;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
