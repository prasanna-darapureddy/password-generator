import { Box, Button, Typography } from '@mui/material'
import { styles } from './PasswordGenratorStyles'
import { useState } from 'react'
import { DoneAll } from '@mui/icons-material'

interface IState{
    length: number,
    isCoppied: boolean,
    password:string,
    isUpper: boolean,
    isLower: boolean,
    isNumber: boolean,
    isSymbol: boolean,
}

function PasswordGenerator() {
    const [password, setPassword] = useState<IState['password']>('')
    const [isCoppied, setIsCoppied] = useState<IState['isCoppied']>(false)
    const [length, setLength] = useState<IState['length']>(10)
    const [isUpper, setIsUpper] = useState<IState['isUpper']>(false)
    const [isLower, setIsLower] = useState<IState['isLower']>(false)
    const [isNumber, setIsNumber] = useState<IState['isNumber']>(false)
    const [isSymbol, setIsSymbol] = useState<IState['isSymbol']>(false)

    const onClickGenerateBtn = () => {
        let str = ''        
        if(isUpper){
            str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
        }
        if(isLower){
            str += 'abcdefghijklmnopqrstuvwxyz'
        }
        if(isNumber){
            str += '0123456789'
        }
        if(isSymbol){
            str += "~!@#$/|%^&*()_+=-?><.,;:'"
        }

        let updatedPassword = ''
        for(let i = 0; i < length; i++){
            if(isUpper || isLower || isNumber || isSymbol){
                updatedPassword += str[Math.ceil(Math.random()*str.length-1)]
            }            
        }
        setPassword(updatedPassword)
    };

  return (
    <>
        <Box sx={styles.bgContainer}>
            <Typography variant='h3'>Password Generator</Typography>
            <Box sx={styles.generatedBox}>
                <Typography>{password}</Typography>
                {isCoppied ? <DoneAll />
                : <Button sx={styles.copyBtn} variant='contained' onClick={() => setIsCoppied(true)}>Copy</Button>}
            </Box>
            <Box component={'ul'} sx={styles.infoContainer}>
                <Box component={'li'} sx={styles.listItem}>
                    <Typography> Password Length</Typography>                    
                    <Box component={'input'} type='number' sx={styles.lenInput} value={length} onChange={(event) => {setLength(Number(event.target.value))}}/>
                </Box>
                <Box component={'li'} sx={styles.listItem}>
                    <Typography>Include Uppercase Letters</Typography> 
                    <Box component={'input'} type='checkbox' sx={styles.checkbox} onChange={(event) => setIsUpper(event.target.checked)}/>                    
                </Box>
                <Box component={'li'} sx={styles.listItem}>
                    <Typography>Include Lowercase Letters</Typography> 
                    <Box component={'input'} type='checkbox' sx={styles.checkbox} onChange={(event) => setIsLower(event.target.checked)}/>                    
                </Box>
                <Box component={'li'} sx={styles.listItem}>
                    <Typography>Include Numbers</Typography>   
                    <Box component={'input'} type='checkbox' sx={styles.checkbox} onChange={(event) => setIsNumber(event.target.checked)}/>                    
                </Box>
                <Box component={'li'} sx={styles.listItem}>
                    <Typography>Include Symbols</Typography> 
                    <Box component={'input'} type='checkbox' sx={styles.checkbox} onChange={(event) => setIsSymbol(event.target.checked)}/>                    
                </Box>               
                <Button sx={styles.generateBtn} variant='contained' onClick={onClickGenerateBtn}>Generate</Button>
            </Box>
        </Box>
    </>
  )
}
export default PasswordGenerator