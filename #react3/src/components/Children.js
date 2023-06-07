import React from 'react'

const Children = ({children}) => {
    console.log(children)
  return (
    <> 
    <div className='d_blue'>{children}</div>
    {/* 스타일을 직접 주려면 중괄호를 두개 적용 */}
    <div style={{color:"green"}}>인라인 스타일</div>
    </>
    
  )
}

export default Children