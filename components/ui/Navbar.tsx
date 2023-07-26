import { Spacer, StyledLink, Text, theme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>

      <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"} alt="Icono de la app" width={70} height={70} />

      <NextLink href="/" legacyBehavior>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favoritos" legacyBehavior>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
