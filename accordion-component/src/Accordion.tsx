import { ReactNode, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface Item {
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleOnToggle = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => {
        const { title, content } = item;

        return (
          <AccordionHeader
            key={index}
            title={title}
            isOpen={index === expandedIndex}
            onToggle={() => handleOnToggle(index)}
          >
            {content}
          </AccordionHeader>
        );
      })}
    </div>
  );
}

interface AccordionHeaderProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onToggle: () => void;
}
function AccordionHeader({
  title,
  isOpen,
  children,
  onToggle,
}: AccordionHeaderProps) {
  return (
    <article onClick={onToggle} className='accordion'>
      <div className='accordion__header'>
        <h3 className='accordion__title'>{title}</h3>
        <span className='icon'>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpen && <p className='accordion__content'>{children}</p>}
    </article>
  );
}

export default Accordion;
