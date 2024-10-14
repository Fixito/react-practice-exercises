import Accordion from './Accordion.tsx';
import data from './data.json';

function App() {
  return (
    <main>
      <div className='faq-section'>
        <Accordion items={data} />
      </div>
    </main>
  );
}

export default App;
