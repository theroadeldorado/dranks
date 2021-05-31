import * as React from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';
import { StyleSheet } from 'react-native';

function Drink(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.4 74.5" style={{ height: 50, width: 50 }}>
      <Path fill="#935527" d="M74.2 32.1l-2.8 30.5H12.3L9.5 32.1z" />
      <G fill="#1C1C1C">
        <Path d="M8.7 74.5h62c1.2 0 2.3-1 2.4-2.2l6.3-69.7c.1-.7-.2-1.3-.6-1.8S77.7 0 77 0H2.4C1.7 0 1.1.3.6.8S-.1 2 0 2.6l6.3 69.7c.1 1.2 1.2 2.2 2.4 2.2zm47.7-45.4l-6 4.1-4.1-6 6-4.1 4.1 6zm-13.6 1.5l5 7.3c.4.5.9.9 1.5 1h.4c.5 0 1-.1 1.4-.4l10-6.8c.4-.3.7-.7.9-1.1h10l-2.8 30.5H10.1L7.3 30.6h35.5zM10.9 69.7l-.3-3.7h58.2l-.3 3.7H10.9zM74.4 4.8l-1.9 21H60l-5-7.3c-.8-1.1-2.3-1.4-3.4-.6l-10 6.8c-.4.3-.7.7-.9 1.1H6.9L5 4.8h69.4z" />
        <Path d="M27.2 52.1l11.3 4.3c.3.1.6.2.9.2 1 0 1.9-.6 2.3-1.6L46 43.7c.2-.6.2-1.3-.1-1.8-.3-.6-.7-1-1.3-1.3l-11.3-4.3c-.6-.2-1.3-.2-1.8.1-.6.3-1 .7-1.3 1.3L25.9 49c-.6 1.2 0 2.6 1.3 3.1zm6.5-10.5l6.8 2.6-2.6 6.8-6.8-2.6 2.6-6.8z" />
      </G>
    </Svg>
  );
}

export default Drink;
