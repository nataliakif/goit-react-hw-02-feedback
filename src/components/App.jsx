import Feedback from './Feedback/Feedback';
import Controls from './Controls/Controls';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
