import React from 'react';
import historyImage from '../images/history.webp';
import { NavBar } from './navbar';



const History = () => {
  const containerStyle = {
    backgroundColor: '#ffc0cb',
    padding: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginTop: '20px',
  };

  return (
    <>
      <NavBar/>
      <div className="container" style={{ ...containerStyle, minHeight: '100vh' }}>

        <header>
          <h1>IRCTC Train History</h1>
        </header>
        <article>
          <p>
            History of Indian Railways: Indian Railways is the fourth-largest network in the world, spanning
            over 1.2 Lakh Km across the country. Mainly, three kinds of services are provided by the Indian Railway
            to the public including Express trains, Mail Express, and Passenger Trains. If we talk about the fare,
            then Passenger trains fare are the lowest and Mail Express trains are the highest. On the other hand,
            Express trains fare lie in the middle.

          </p>
          <p>
            In 1832, the idea of setting up a railway system in British India was first proposed. At that time, rail travel
            was still in its infancy in Britain, but the East India Company knew the benefits of developing an extensive rail
            network. After a long decade of inaction, private entrepreneurs were allowed to establish a rail system by Lord Hardinge
            , the Governor-General of India in 1844. Two companies were formed by the year 1845 namely "East Indian railway Company"
            and the "Great Indian Peninsula Railway".

          </p>
          <p>
            On 16 April 1853, the first train in India was to run between Bori Bunder, Bombay (now Mumbai), and Thane at a distance of
            around 34 km. The network to about 14,500 Km was developed in 1880 around the three major port cities of Bombay, Madras, and
            Calcutta. In 1901, Railway Board was formed under the guidance of the Department of Commerce and Industry. But still, the powers
            were vested in the Viceroy. Take a look at the chronology of Railways in India.
          </p>
        </article>
        <img src={historyImage} alt="IRCTC Train History" style={imageStyle} />
      </div>
    </>
  );
};

export default History;
