import { Grid } from '@chakra-ui/react'
// <Stack
//     spacing="1.5rem"
//     width="100%"
//     maxWidth="48rem"
//     mt="-45vh"
//     pt="8rem"
//     px="1rem"
//     {...props}
//   />

export const Main = (props) => (
  <Grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
    {...props}
  >
  </Grid>
)
