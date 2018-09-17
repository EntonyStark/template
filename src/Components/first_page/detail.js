import React from 'react';

import img1 from '../../Image/user-3.jpg';
import img2 from '../../Image/user-4.jpg';
import img3 from '../../Image/user-5.jpg';
import img4 from '../../Image/user-6.jpg';
import user1 from '../../Image/user-1.jpg';
import user2 from '../../Image/user-2.jpg';

const list = [
  { id: 1, text: 'Close to the beach' },
  { id: 2, text: 'Breakfast included' },
  { id: 3, text: 'Free airport shuttle' },
  { id: 4, text: 'Free wifi in all rooms' },
  { id: 5, text: 'Air conditioning and heating' },
  { id: 6, text: 'Pets allowed' },
  { id: 7, text: 'We speak all languages' },
  { id: 8, text: 'Perfect for families' },
];

export default () => (
  <div className="detail">
    <div className="description">
      <p className="paragraph">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione
				sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
				Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore
				iure aliquid aliquam.
      </p>

      <ul className="list">
        {list.map(el => (
          <li className="list__item" key={el.id}>
            {el.text}
          </li>
        ))}
      </ul>

      <div className="recommend">
        <p className="recommend__count">Lucy and 3 other friend recommend this hotel</p>

        <div className="recommend__friends">
          <img src={img1} alt="1" className="recommend__photo" />
          <img src={img2} alt="2" className="recommend__photo" />
          <img src={img3} alt="3" className="recommend__photo" />
          <img src={img4} alt="4" className="recommend__photo" />
        </div>
      </div>
    </div>
    <div className="user-reviews">
      <figure className="review">
        <blockquote className="review__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi,
					totam, itaque officia ex.
        </blockquote>

        <figcaption className="review__user">
          <img src={user1} alt="user1" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">Nick Smith</p>
            <p className="review__user-date">Feb 23rd, 2017</p>
          </div>
          <div className="review__rating">7.8</div>
        </figcaption>
      </figure>

      <figure className="review">
        <blockquote className="review__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
        </blockquote>

        <figcaption className="review__user">
          <img src={user2} alt="user2" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">Mary Thomas</p>
            <p className="review__user-date">Sept 13th, 2017</p>
          </div>
          <div className="review__rating">9.3</div>
        </figcaption>
      </figure>

      <button className="btn-inline">
				Show all <span>&rarr;</span>
      </button>
    </div>
  </div>
);
