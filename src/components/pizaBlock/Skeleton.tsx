import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="348" rx="10" ry="10" width="274" height="88" />
    <rect x="5" y="294" rx="11" ry="11" width="270" height="33" />
    <rect x="7" y="467" rx="10" ry="10" width="90" height="27" />
    <rect x="7" y="3" rx="125" ry="125" width="255" height="255" />
    <rect x="125" y="454" rx="27" ry="27" width="152" height="45" />
  </ContentLoader>
)
