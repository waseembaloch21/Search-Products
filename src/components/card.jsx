import React from 'react';

function Card({ title, image, description, price }) {
  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg h-96 w-96" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-bold text-lg text-gray-900 dark:text-white">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Card;