import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'

interface StatsProps {
  label: string
  amount: number
  date: string
}

const Stats: React.FC<StatsProps> = ({ label, amount, date }) => {
  return (
    <Stat
      border="2px"
      borderRadius="2xl"
      borderColor="green.400"
      padding="2"
      marginY="6"
      textAlign="center"
    >
      <StatLabel>{label}</StatLabel>
      <StatNumber>Rp. {`${Intl.NumberFormat('id').format(amount)}`}</StatNumber>
      <StatHelpText>{date}</StatHelpText>
      <Button size="md" variant="outline" as={Link} to="/laba-rugi">
        Details
      </Button>
    </Stat>
  )
}

export default Stats
