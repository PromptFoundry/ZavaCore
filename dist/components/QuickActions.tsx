import { Food24Regular, Clock24Regular, QuestionCircle24Regular, VehicleCar24Regular, DocumentTable24Regular, Diamond24Regular } from '@fluentui/react-icons';

const actions = [
  { Icon: Food24Regular,          title: 'Order Lunch',           description: 'Help me order my favorite dish from the cafe' },
  { Icon: Clock24Regular,         title: 'Manage time',           description: 'Assist me in scheduling time away. Ensure that my calendar reflects that and all meetings are updated...' },
  { Icon: QuestionCircle24Regular, title: 'Ask a question',       description: 'Assist me in scheduling time away. Ensure that my calendar reflects that and all meetings are updated...' },
  { Icon: VehicleCar24Regular,    title: 'Book a shuttle',        description: 'Help me order my favorite dish from the cafe' },
  { Icon: DocumentTable24Regular, title: 'View recent paystub',   description: 'Assist me in scheduling time away. Ensure that my calendar reflects that and all meetings are updated...' },
  { Icon: Diamond24Regular,       title: 'Navigate MyBenefits',   description: 'Explain what the Microsoft Benefits SPD includes and how it\'s useful to me.' },
];

export default function QuickActions() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px', color: '#242424' }}>
        Quick actions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[actions.slice(0, 3), actions.slice(3, 6)].map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {row.map(({ Icon, title, description }, i) => (
              <div
                key={i}
                style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'linear-gradient(135deg, #5b2dc7 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ color: '#fff' }} />
                  </div>
                  <span style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: '16px', fontWeight: 600, color: '#242424', lineHeight: '22px' }}>{title}</span>
                </div>
                <p style={{ margin: 0, fontFamily: '"Segoe UI", sans-serif', fontSize: '13px', color: '#616161', lineHeight: '18px' }}>{description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
