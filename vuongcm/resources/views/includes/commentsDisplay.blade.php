@foreach($comments as $comment)
    @guest
        <div class="wrap-comments" data-cmt="{{ $comment->id }}" data-user="{{ $comment->user_id }}">
            <div class="comment @if($comment->parent_id != null){{'reply'}}@endif">
                <div>
                    <div class="avatar">
                        @if($comment->user->avatar == null)
                        <div style="background-color: #{{substr($comment->user->id, 0, 2)}}51735">{{ substr($comment->user->firstname, 0, 2) }}</div>
                        @else
                        <img src="{{ $comment->user->avatar }}" title="avatar" alt="User Avatar">
                        @endif
                    </div>
                    <h5 class="nickName">{{ $comment->user->username }}</h5>
                    <div class="dateAgo">{{ $time[$comment->id] }}</div>
                </div>
                <div>
                    <p>{{ $comment->body }}</p>
                    @if($comment->parent_id == null)
                    <a href="javascript:;" class="btn-show-rep">Ẩn/Hiện phản hồi</a>
                    @endif
                </div>
            </div>
            @include('includes.commentsDisplay', ['comments' => $comment->replies])
        </div>
    @else
        <div class="wrap-comments" data-cmt="{{ $comment->id }}" data-user="{{ $comment->user_id }}">
            <div class="comment @if($comment->parent_id != null){{'reply'}}@endif">
                <div>
                    <div class="avatar">
                        @if($comment->user->avatar == null)
                        <div style="background-color: #{{substr($comment->user->id, 0, 2)}}51735">{{ substr($comment->user->firstname, 0, 2) }}</div>
                        @else
                        <img src="{{ $comment->user->avatar }}" title="avatar" alt="User Avatar">
                        @endif
                    </div>
                    <h5 class="nickName">{{ $comment->user->username }}</h5>
                    <div class="dateAgo">{{ $time[$comment->id] }}</div>
                </div>
                <div>
                    <p>{{ $comment->body }}</p>
                    <a href="javascript:;" class="btn-reply">Trả lời</a>
                    @if(Auth::user()->level == 1 || Auth::user()->id == $comment->user_id)
                    <a href="javascript:;" class="btn-delete-cmt">Xóa</a>
                    @endif
                    @if($comment->parent_id == null)
                    <a href="javascript:;" class="btn-show-rep">Ẩn/Hiện phản hồi</a>
                    @endif
                </div>
            </div>
            @include('includes.commentsDisplay', ['comments' => $comment->replies])
            @if($comment->parent_id == null)
            <div class="reply-cmt">
                <form class="cmt-form">
                    <input class="body-cmt inputCmt" type="text" name="body" />
                    <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                    <input type="hidden" name="post_id" value="{{ $post_id }}" />
                    <input type="hidden" name="parent_id" value="{{ $comment->id }}" />
                </form>
            </div>
            @endif
        </div>
        
    @endguest
@endforeach