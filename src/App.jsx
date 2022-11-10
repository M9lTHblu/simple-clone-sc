const injectCSSClass = (className, styles) => {
  const styleSheet = document.styleSheets[0]
  styleSheet.insertRule(`.${className} {${styles}}`)
}

const getRandomString = () => {
  return Math.random().toString(36).replace(/[^ a-z]+/g, '')
}

export default function App () {

  return (
    <div className='App'>
      <StyledTitle>
        styled component
      </StyledTitle>
      <ComposingStyledMessage>
        functional component
      </ComposingStyledMessage>
      <ComposingStyledComponent>
        composing styled components
      </ComposingStyledComponent>
    </div>
  )
}



const styled = (Tag) => (styles) => (props) => {
  const uniqueClassName = getRandomString()
  // const processedStyles = addVendorPrefixes(styles)
  injectCSSClass(uniqueClassName, styles)
  const combinedClasses = [
    uniqueClassName,
    props.className
  ].join(' ')

  return <Tag className={combinedClasses} {...props} />
}


styled.h1 = styled('h1')
styled.button = styled('button')

const StyledTitle = styled.h1('background-color: red;')
const StyledButton = styled.button('background-color: red;')
const ComposingStyledComponent = styled(StyledButton)('background-color: yellow')
const Message = ({children, ...rest}) => <p {...rest} >composing {children}</p>
const ComposingStyledMessage = styled(Message)('background-color: green;')
