import React from 'react'
import TrackOrder from '../../Components/TrackOrder/TrackOrder'
import useScrollTo from '../../hooks/scroll/useScrollTo';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import Header from '../../Components/Home/Header/Header';
import useFixedHeader from '../../hooks/scroll/useFixedHeader';

const TrackOrderPage = () => {
  // const [scrollPosition] = useScrollTo();
  const [isHeaderFixed] = useFixedHeader(100);

  return (
    <>
      <HELMET title="meta-title-home" description="Nestritto Faqs Page description" />
      {/* {isHeaderFixed ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      {/* {scrollPosition > 200 ? <Header fixedHeader={true} customBG={true} /> : <Header customBG={true} /> } */}
      <Header customBG={true} />
      <TrackOrder />
    </>
  )
}

export default TrackOrderPage