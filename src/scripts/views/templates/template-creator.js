import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h3 class="restaurant__title">${restaurant.name || 'N/A'}</h3>
<img class="restaurant__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || 'N/A'}" />
    <div class="restaurant__info">
      <h3>Informasi</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address || 'N/A'}, ${restaurant.city || 'N/A'}</p>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating || 'N/A'}</p>
      <h4>Kategori</h4>
      <p>${restaurant.categories ? restaurant.categories.map((category) => category.name).join(', ') : 'N/A'}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Deskripsi</h3>
      <p>${restaurant.description || 'N/A'}</p>
    </div>
    <div class="restaurant__menu">
      <h3>Menu</h3>
      <h4>Makanan</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.foods ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('') : '<li>N/A</li>'}
      </ul>
      <h4>Minuman</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.drinks ? restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('') : '<li>N/A</li>'}
      </ul>
    </div>
    <div class="restaurant__reviews">
      <h3>Ulasan Pelanggan</h3>
      ${restaurant.customerReviews ? restaurant.customerReviews.map((review) => `
        <div class="review">
          <h4>${review.name || 'N/A'}</h4>
          <p>${review.review || 'N/A'}</p>
          <p><small>${review.date || 'N/A'}</small></p>
        </div>
      `).join('') : '<p>Tidak ada ulasan tersedia</p>'}
    </div>
  `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card" tabindex="0">
        <h2 tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
        <img crossorigin="anonymous" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Gambar ${restaurant.name}" tabindex="0">
        <p tabindex="0">Kota: ${restaurant.city}</p>
        <p tabindex="0">⭐️ Rating: ${restaurant.rating}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
