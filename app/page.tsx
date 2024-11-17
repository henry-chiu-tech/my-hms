'use client'

import React, { useState } from 'react';
import styles from './page.module.css'; // Import your styles
import Image from "next/image";

import { DateRangePicker } from 'react-date-range'; // Import DateRangePicker
import { addDays } from 'date-fns'; // Import helper to calculate date ranges
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// Images from: https://www.airbnb.com.au/rooms/41508496?adults=2&category_tag=Tag%3A8186&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1004064441&search_mode=flex_destinations_search&check_in=2025-01-27&check_out=2025-02-01&source_impression_id=p3_1731829374_P3-hQ7vyhbG65jTc&previous_page_section_name=1000&federated_search_id=d8ad6225-9b87-42c4-b5eb-4797e0701033&modal=PHOTO_TOUR_SCROLLABLE

export default function HolidayHomePage() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1), // Default end date is one day after the start
    key: 'selection',
  });

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection); // Update selected date range
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Jim's Lakeside Luxury Retreat</h1>
          <p>Escape Jim and go to a paradise in this stunning lakeside holiday home.</p>
        </div>
      </section>

      {/* Property Details */}
      <section className={styles.details}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImageContainer}>
            <Image
              src="/images/f923b294-8b45-4a18-be06-485ee401b400.webp"
              alt="Holiday Home Exterior"
              width={2800}
              height={2600}
              className={styles.mainImage}
            />
          </div>
          <div className={styles.thumbnailGrid}>
            <Image
              src="/images/4fa7f019-18f5-4bb9-8d71-0348f07668f9.webp"
              alt="Interior 1"
              width={600}
              height={500}
              className={styles.thumbnail}
            />
            <Image
              src="/images/44da7787-ae9a-409b-85cf-408bf480ab9a.webp"
              alt="Interior 2"
              width={600}
              height={550}
              className={styles.thumbnail}
            />
            <Image
              src="/images/37185eec-a78d-452f-b374-a86f8b2ad748.webp"
              alt="Interior 3"
              width={600}
              height={550}
              className={styles.thumbnail}
            />
          </div>
        </div>

        <div className={styles.layout}>
          
          {/* Description Section */}

          <div className={styles.description}>
            <h2>About Jim's Property</h2>
            <p>
              Nestled along the coast, this luxury holiday home offers breathtaking ocean views, 
              modern amenities, and a tranquil escape from the hustle of daily life.
            </p>
            <ul>
              <li>3 Bedrooms</li>
              <li>2 Bathrooms</li>
              <li>Private Pool</li>
              <li>Beachfront Access</li>
            </ul>
            <div className={styles.price}>
              <p>$350 / night</p>
            </div>
            <button className={styles.bookButton}>Book Now</button>
          </div>

          {/* Calendar Section */}
          <div className={styles.calendar}>
              <h2>Choose Your Dates</h2>
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                months={1} // Display two months at once
                direction="vertical" // Layout the calendar horizontally
                rangeColors={['#ff385c']} // Color for selected range
              />
            </div>

          </div>
      </section>
    </main>
  );
}
