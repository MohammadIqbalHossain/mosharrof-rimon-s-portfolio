import React from 'react'
import './Accordion.scss';
import DisplayAccordion from './DisplayAccordion';

function Accordion() {

    const accordionData = [
        {
            title: 'After sales from your sales?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: 'How to make header transparent?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Create call to action color active?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Display position header and footer?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];

    return (
        <div>
            <div>
                <h1 className="section-title">Frequently Asked Questions</h1>
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <DisplayAccordion title={title} content={content} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion