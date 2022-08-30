import React from 'react'
import GoogleMapReact from 'google-map-react'

const Googlemaps = () => {

    const defaultProps = {
        center: {
            lat: 25.078458,
            lng: 121.576127
        },
    };

    //console.log(props.center)
    //console.log(typeof defaultProps.center)

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        console.log('載入完成!') // 印出「載入完成」
    };

    return <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} // 載入完成後執行
      >
      </GoogleMapReact>
    </div>
}

export default Googlemaps