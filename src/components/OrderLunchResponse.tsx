import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ThumbLikeRegular,
  ThumbDislikeRegular,
  MoreHorizontalRegular,
} from '@fluentui/react-icons';

import imgKoreanChicken from '../assets/response/food-korean-chicken.png';
import imgTacos         from '../assets/response/food-tacos.png';
import imgBurger        from '../assets/response/food-burger.png';
import imgIconLocation  from '../assets/response/icon-location.svg';
import imgIconBowl      from '../assets/response/icon-bowl.svg';

const seg: React.CSSProperties = { fontFamily: '"Segoe UI", -apple-system, sans-serif' };

const imgIconOrderHistory = `${import.meta.env.BASE_URL}assets/images/icon-clock-bill.svg`;
const imgIconFood         = `${import.meta.env.BASE_URL}assets/images/icon-food.svg`;

type Order = {
  location: string;
  image: string;
  dish: string;
  description: string;
  emoji: string;
};

const orders: Order[] = [
  {
    location: 'Food Hall 6: Omabop',
    image: imgKoreanChicken,
    dish: 'Korean Fried Chicken',
    description: 'Crispy, twice-fried Korean-style chicken glazed in a savory-sweet sauce with notes of garlic, soy, and chili. Finished with a light crunch and bold umami flavor in every bite.',
    emoji: '🍗',
  },
  {
    location: 'Food Hall 6: Taco Shop',
    image: imgTacos,
    dish: 'Carnita Street Tacos',
    description: 'Warm corn tortillas loaded with juicy, marinated protein of your choice, finished with onion, cilantro, and house salsa. Small, craveable, and packed with street-level flavor.',
    emoji: '🌮',
  },
  {
    location: 'Food Hall 6: Burger Castle',
    image: imgBurger,
    dish: 'Crispy Comté Frico Cheeseburger',
    description: 'A juicy beef patty topped with a golden, crispy Comté frico, layered with rich, nutty cheese flavor and a satisfying crunch. Finished with classic burger fixings on a toasted bun for the perfect balance of indulgent and savory.',
    emoji: '🍔',
  },
];

// ── Action bar ────────────────────────────────────────────────────────────────
function ActionBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {([
        <ThumbLikeRegular key="like" style={{ width: 20, height: 20 }} />,
        <ThumbDislikeRegular key="dislike" style={{ width: 20, height: 20 }} />,
        <MoreHorizontalRegular key="more" style={{ width: 20, height: 20 }} />,
      ]).map((icon, i) => (
        <button key={i} style={{
          width: 28, height: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'transparent', border: 'none', borderRadius: 4,
          cursor: 'pointer', color: '#616161',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >{icon}</button>
      ))}
    </div>
  );
}

// ── Order list item ───────────────────────────────────────────────────────────
function OrderItem({ order, onReorder }: { order: Order; onReorder: (o: Order) => void }) {
  const { location, image, dish, description } = order;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Content section */}
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.85)', border: '2px solid #f7fcfd',
        borderRadius: 12, padding: 16,
        display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden',
      }}>
        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={imgIconLocation} alt="" style={{ width: 14, height: 16, display: 'block' }} />
          </div>
          <span style={{ ...seg, fontSize: 16, color: '#242424', lineHeight: '24px' }}>{location}</span>
        </div>

        {/* Food image */}
        <div style={{ height: 263, borderRadius: 16, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
          <img src={image} alt={dish} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
        </div>

        {/* Dish name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={imgIconBowl} alt="" style={{ width: 16, height: 16, display: 'block' }} />
          </div>
          <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#424242', lineHeight: '24px', whiteSpace: 'nowrap' }}>{dish}</span>
        </div>

        {/* Description */}
        <p style={{ ...seg, fontSize: 16, color: '#424242', lineHeight: '24px', margin: 0 }}>{description}</p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 20 }}>
        <button style={{
          flex: 1, ...seg, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#484644',
          backgroundColor: 'transparent', border: '1px solid #dbdbdb', borderRadius: 12,
          padding: '16px 12px', cursor: 'pointer',
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >Order something else</button>

        <button
          onClick={() => onReorder(order)}
          style={{
            flex: 1, ...seg, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#484644',
            backgroundColor: 'transparent', border: '1px solid #dbdbdb', borderRadius: 12,
            padding: '16px 12px', cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >Reorder</button>
      </div>
    </div>
  );
}

// ── Place order confirmation ───────────────────────────────────────────────────
function PlaceOrderCard({ order, onBack, onOrderComplete }: { order: Order; onBack: () => void; onOrderComplete: (dish: string, emoji: string) => void }) {
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setPlaced(true);

    const duration = 2500;
    const end = Date.now() + duration;
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff'];

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        zIndex: 99999,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        zIndex: 99999,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    // After confetti finishes, go back to home and show tracker
    setTimeout(() => onOrderComplete(order.dish, order.emoji), duration);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', ...seg }}>

      {/* Copilot intro */}
      <p style={{ ...seg, fontSize: 16, color: '#424242', lineHeight: '24px', margin: 0 }}>
        Reordering {order.dish} from {order.location}
      </p>

      {/* Entity card */}
      <div style={{
        backgroundColor: '#feffff', border: '1px solid #e0e0e0',
        borderRadius: 24, padding: 24,
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        {/* Entity title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36, backgroundColor: '#fafafa', borderRadius: 8, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={imgIconFood} alt="" style={{ width: 17, height: 20 }} />
          </div>
          <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', lineHeight: '22px' }}>Place an order</span>
        </div>

        {/* Content section */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.85)', border: '2px solid #f7fcfd',
          borderRadius: 12, padding: 16,
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          {/* Thumbnail */}
          <div style={{ width: 108, height: 108, borderRadius: 8, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
            <img src={order.image} alt={order.dish} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Dish name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={imgIconBowl} alt="" style={{ width: 16, height: 16, display: 'block' }} />
              </div>
              <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#424242', lineHeight: '24px' }}>{order.dish}</span>
            </div>

            {/* Description */}
            <p style={{ ...seg, fontSize: 16, color: '#424242', lineHeight: '24px', margin: 0 }}>{order.description}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ position: 'relative' }}>
          {placed ? (
            <div style={{
              padding: '16px 12px', borderRadius: 12, backgroundColor: '#ebf3fc',
              border: '1px solid #0078d4', textAlign: 'center',
              ...seg, fontSize: 14, fontWeight: 600, color: '#484644', lineHeight: '20px',
            }}>
              Order placed!
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 20 }}>
              <button
                onClick={onBack}
                style={{
                  flex: 1, ...seg, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#484644',
                  backgroundColor: 'transparent', border: '1px solid #dbdbdb', borderRadius: 12,
                  padding: '16px 12px', cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >Back</button>

              <button
                onClick={handlePlaceOrder}
                style={{
                  flex: 1, ...seg, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#484644',
                  backgroundColor: '#ebf3fc', border: '1px solid #0078d4', borderRadius: 12,
                  padding: '16px 12px', cursor: 'pointer',
                  boxShadow: '0px 3.2px 7.2px rgba(0,0,0,0.13), 0px 0.6px 1.8px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d0e8f8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ebf3fc')}
              >Place Order</button>
            </div>
          )}
        </div>
      </div>

      <ActionBar />
    </div>
  );
}

// ── Order history list ────────────────────────────────────────────────────────
interface OrderLunchResponseProps {
  onOrderComplete: (dish: string, emoji: string) => void;
}

export default function OrderLunchResponse({ onOrderComplete }: OrderLunchResponseProps) {
  const [reorderItem, setReorderItem] = useState<Order | null>(null);

  if (reorderItem) {
    return <PlaceOrderCard order={reorderItem} onBack={() => setReorderItem(null)} onOrderComplete={onOrderComplete} />;

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', ...seg }}>

      {/* Entity card */}
      <div style={{
        backgroundColor: '#feffff', border: '1px solid #e0e0e0',
        borderRadius: 24, padding: 24,
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        {/* Entity title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36, backgroundColor: '#fafafa', borderRadius: 8, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={imgIconOrderHistory} alt="" style={{ width: 18, height: 18 }} />
          </div>
          <span style={{ ...seg, fontSize: 16, fontWeight: 600, color: '#242424', lineHeight: '22px' }}>Order History</span>
        </div>

        {/* Orders list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {orders.map(order => (
            <OrderItem key={order.location} order={order} onReorder={setReorderItem} />
          ))}
        </div>
      </div>

      <ActionBar />
    </div>
  );
}
