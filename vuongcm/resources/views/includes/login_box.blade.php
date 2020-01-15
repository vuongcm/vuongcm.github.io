<div id="myModal" class="modal fade" tabindex="-1" role="dialog">
  <div id="login-overlay" class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Thành viên đăng nhập</h4>
             <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Đóng</span></button>
              
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                  <div class="col-xs-12">
                      <div class="well">
                          <form id="loginForm" method="POST" action="{{ route('login') }}">
                            @csrf
                              <div class="form-group">
                                  <label for="username" class="control-label">Tài khoản</label>
                                  <input type="text" class="form-control" id="username" name="username" value="{{ old('username') }}" required title="Xin vui lòng nhập tên tài khoản" autofocus>
                                  <span class="help-block"></span>
                              </div>
                              <div class="form-group">
                                  <label for="password" class="control-label">Mật khẩu</label>
                                  <input type="password" class="form-control" id="password" name="password" required title="Xin vui lòng nhập mật khẩu" autocomplete="current-password">
                                  <span class="help-block"></span>
                              </div>
                              @if ($errors->has('username') || $errors->has('password'))
                              <div id="loginErrorMsg" class="error-notification" role="alert"><strong>Sai tên tài khoản hoặc mật khẩu</strong></div>
                              @endif
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}> Nhớ thông tin
                                  </label>
                                  <p class="help-block">(Nếu sử dụng máy tính cá nhân)</p>
                              </div>
                              <button type="submit" class="btn btn-success btn-block">Đăng nhập</button>
                              @if (Route::has('password.request'))
                                  <a href="{{ route('password.request') }}">Quên mật khẩu?</a>
                              @endif
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      </div>
  </div>
</div>