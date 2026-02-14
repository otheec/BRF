import { NavLink, Outlet } from 'react-router-dom'
import { Box, Flex, Heading, Container } from '@radix-ui/themes'

const navItems = [
  { to: '/beers', label: 'Beers' },
  { to: '/breweries', label: 'Breweries' },
  { to: '/venues', label: 'Venues' },
] as const

export function Layout() {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Header / nav bar */}
      <Box asChild py="3" px="4" style={{ borderBottom: '1px solid var(--gray-a5)' }}>
        <header>
          <Container size="4">
            <Flex align="center" gap="6">
              <Heading size="4" weight="bold" asChild>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Brewfolio
                </NavLink>
              </Heading>

              <Flex asChild gap="4" align="center">
                <nav>
                  {navItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      style={({ isActive }) => ({
                        textDecoration: 'none',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'var(--accent-11)' : 'var(--gray-11)',
                      })}
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </Flex>
            </Flex>
          </Container>
        </header>
      </Box>

      {/* Main content area */}
      <Box flexGrow="1" py="5">
        <Container size="4">
          <Outlet />
        </Container>
      </Box>
    </Flex>
  )
}
