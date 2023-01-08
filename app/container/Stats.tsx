import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

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
      backgroundColor="green.100"
      color="green.800"
    >
      <StatLabel>{label}</StatLabel>
      <StatNumber>Rp. {`${Intl.NumberFormat('id').format(amount)}`}</StatNumber>
      <StatHelpText>{date}</StatHelpText>
    </Stat>
  )
}

export default Stats
