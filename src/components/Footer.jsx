import { Grid, Col, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <footer>
      <Grid>
        <Col span={12}>
          <Text align="center">
            2021 | Sample Project  ©
          </Text>
        </Col>
      </Grid>
    </footer>
  )
}

export default Footer;