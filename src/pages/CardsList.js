import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardsList.css';

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost/smart-cards/api.php');
        if (response.data.status === 'success') {
          setCards(response.data.data);
        } else {
          setError('فشل في جلب البطاقات');
        }
      } catch (err) {
        setError('حدث خطأ أثناء جلب البطاقات');
      }
    };
    fetchCards();
  }, []);

  return (
    <section>
      <h2>البطاقات المسجلة</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {cards.length === 0 && !error ? (
        <p>لا توجد بطاقات مسجلة بعد</p>
      ) : (
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                {card.image ? (
                  <img
                    src={`http://localhost/smart-cards/uploads/${card.image}`}
                    alt={`${card.first_name} ${card.last_name}`}
                    className="card-avatar"
                  />
                ) : (
                  <div className="card-avatar">لا توجد صورة</div>
                )}
                <h3>{`${card.first_name} ${card.last_name}`}</h3>
                <p>{card.position}</p>
                <p>{card.department}</p>
              </div>
              <div className="card-body">
                {card.phone && (
                  <p>
                    <strong>الهاتف:</strong> {card.phone}
                  </p>
                )}
                {card.email && (
                  <p>
                    <strong>البريد الإلكتروني:</strong> {card.email}
                  </p>
                )}
                {card.skills.length > 0 && (
                  <div>
                    <strong>المهارات:</strong>
                    <ul>
                      {card.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.notes && (
                  <p>
                    <strong>ملاحظات:</strong> {card.notes}
                  </p>
                )}
              </div>
              <div className="card-footer">
                {card.social.twitter && (
                  <a href={`https://twitter.com/${card.social.twitter}`} target="_blank" rel="noopener noreferrer">
                    تويتر
                  </a>
                )}
                {card.social.linkedin && (
                  <a href={card.social.linkedin} target="_blank" rel="noopener noreferrer">
                    لينكد إن
                  </a>
                )}
                {card.social.github && (
                  <a href={`https://github.com/${card.social.github}`} target="_blank" rel="noopener noreferrer">
                    جيت هاب
                  </a>
                )}
                {card.qr_code && (
                  <img
                    src={`http://localhost/smart-cards/uploads/${card.qr_code}`}
                    alt="QR Code"
                    className="qr-code"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CardsList;