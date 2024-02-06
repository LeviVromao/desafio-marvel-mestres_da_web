import { useState, FormEvent, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { useRouter } from "next/router";

export default function FormLogin() {
  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [checked, setCheckbox] = useState<Boolean>(false);
  const [animationPlayed, setAnimationPlayed] = useState<Boolean>(false)
  const router = useRouter()
  useEffect(() => {
    userAlreadySigned()
  }, [])

  const userAlreadySigned = () => {
    const user = JSON.parse(localStorage.getItem("user")!)
    if(user) {
      router.push('/personagens')
    }
  }

  const handleForm = (e: FormEvent) => {
    e.preventDefault()
    if(checked) {
      localStorage.setItem("user", JSON.stringify({email}))
    }
    router.push("/personagens")
  }

  const LoginAnimation = useSpring({
    from: {transform: !animationPlayed?"translate(0px, 2700px)":""},
    to: async (next)=>{
      if(!animationPlayed) {
        await next({transform: "translate(0, 2700px)"})
        await new Promise((resolve) => setTimeout(resolve, 1000))
        await next({transform: "translate(0,0)"})
        setAnimationPlayed(true)
      }
    },
    config: {
      duration: 1700,
    },
  })
  return (
    <FormContainer style={LoginAnimation} onSubmit={handleForm}>
    <div>
      <TitleH1>Bem vindo(a) de volta!</TitleH1>
      <TitleP $large>Acesse a sua conta:</TitleP>
    </div>
    <InputContainer>
      <Button placeholder="Usúario" type="email" onChange={e => setEmail(e.target.value)} required/>
      <Button placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} required/>
      <UserOptionsContainer>
        <Options>
          <input type="checkbox" id="saveLogin" onChange={e => setCheckbox(e.target.checked)}/>
          <Label htmlFor="saveLogin">Salvar login?</Label>
        </Options>
        <Link href="/forgot" $forgot>Esqueci a senha</Link>
      </UserOptionsContainer>
      <SubmitInput placeholder="Entrar" type="submit"/>
      <Options>
        <TitleP $noMarge>Ainda não tem login?</TitleP>
        <Link href="/register">Cadastre-se</Link>
      </Options>
    </InputContainer>
  </FormContainer>
  )
}

const FormContainer = styled(animated.form)`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleH1 = styled.h1`
  font-size: 27px;
  color: #F00;
  margin: 18px 0 0 0;
  padding: 13px 0 0 12px;
`
const TitleP = styled.p<{$large?: boolean, $noMarge?: boolean}>`
    font-size: ${props => props.$large? "20px": "16px"};
    color: #84848D;
    margin: ${props => props.$noMarge? "0":"0 0 18px 0"};
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.86rem;
  width: 100%;
`
const Button = styled.input`
  height: 73px;
  width: 359px;
  min-width: 200px;
  border-radius: 30px;
  padding: 0 0 0 16px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  };
`
const SubmitInput = styled.input`
  height: 65px;
  min-width: 200px;
  background: #F00;
  width: 359px;
  color: #FFF;
  border:none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
`
const UserOptionsContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  width: 80%;
`
const Label = styled.label`
  color: #84848D;
`
const Link = styled.a<{$forgot?:boolean}>`
  color: ${props => props.$forgot? "#84848D": "#F00000"};
  border-bottom: ${props => props.$forgot? "2px solid #F00":""}
`
const Options = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`