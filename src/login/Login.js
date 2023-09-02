import './Login.css'
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    return(
        
        <div class="login-area">
            <div class="form-container">
            <form>
                <h3 className='login-title'>로그인</h3>

                <div class="form-group">
                    <input type="text" className="login-form-com" placeholder="아이디" name="uesrname" required/>
                </div>
                <div class="form-group">
                    <input type="password" className="login-form-com" placeholder="패스워드"  name="password" minlength="8" required/>
                </div>

                <div class="form-group">
                    <input type="checkbox" id="logincheck" name="checkbox" value="logincheck"  className='login-check'/>
                    <label for="logincheck" className='check-tilte'>로그인 상태 유지</label>
                </div>
                <button type="submit" className='login-btn'>로그인</button>
            </form>

            <div className='form-group3'>
                <p className='form-group3-p'>아이디 찾기</p>
                <p className='form-group3-p'>비밀번호 찾기</p>
                <p className='form-group3-p' onClick={()=>{ navigate('/membership') }} >회원가입</p>
            </div>
            </div>
        </div>
    
    
    
    
    )
}

export default Login;