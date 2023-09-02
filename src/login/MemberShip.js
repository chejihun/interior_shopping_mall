import './MemberShip.css'

function MemberShip() {
    return(
        
        <div class="membership-area">
            <div class="form-container">
            <form>
                <h3 className='member-title'>회원가입</h3>
                <p className='member-title-p'>양식에 맞춰 회원정보를 입력해주세요!</p>

                <div class="form-group">
                    <label className='form-mem-title'>아이디</label>
                    <input type="text" className="member-form-com" placeholder="원하시는 아이디를 입력해주세요" name="uesrname" required/>
                    <button type="submit" className='mem-serch-btn'>중복체크</button>
                    <div className='clear'></div>
                </div>
                <div class="form-group">
                    <label className='form-mem-title'>닉네임</label>
                    <input type="text" className="member-form-com" placeholder="원하시는 닉네임을 입력해주세요" name="uesrname" required/>
                    <button type="submit" className='mem-serch-btn'>중복체크</button>
                    <div className='clear'></div>
                </div>
                <div class="form-group">
                    <label className='form-mem-title'>비밀번호</label>
                    <input type="password" className="member-form-com" placeholder="비밀번호는 특수문자를 포함해주세요"  name="password" minlength="8" required/>
                    <label className='form-mem-subtitle'>비밀번호는 8자이상 특수문자를 포함해주세요!</label>

                </div>

              
                <button type="submit" className='membership-btn'>가입하기</button>
            </form>

            </div>
        </div>
    
    
    
    
    )
}

export default MemberShip;