import { Navbar, Button, Link } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import logo from '../../assets/Logo.png'




export default function NavMain() {
  return (

      <Navbar isBordered variant="floating">
        <Navbar.Brand>
        <Image src={logo} alt="ACME Logo" width="177.1px" height="32.486px" flexShrink={0} />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

  )
}
