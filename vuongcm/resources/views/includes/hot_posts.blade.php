<aside>
    <h5>NHIỀU LƯỢT XEM NHẤT</h5>
@foreach($list_posts as $row)
    <div class="hot-pic">
       <a href="{{ route('detail.post', ['big_group' => $row->big_group,'group' => $row->group, 'link' => $row->link]) }}" title="{{ $row->title }}"><h6>{{ $row->title }}</h6></a>
        <div class="view">
            <p><span></span> {{ $row->view }}</p>
            <p><span></span> {{ $cmt_count[$row->id] }}</p>
        </div>
    </div>
@endforeach
    <div>...</div>
</aside>