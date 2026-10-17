import { Text } from 'react-native';

export const Year = 2026;

function Footer () {
  return (
    <>
      <Text> Made with love in the kitchen</Text>
      <Text> ©{new Date().getFullYear()} My Recipe Book</Text>
    </>
  );
}

export default Footer;