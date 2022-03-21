import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
import ListNum from '../../../src/components/units/list/ListNum/ListNum.container'

export default function StaticRoutedPage(){
    
    return(
        <ListNum></ListNum>
    )
}