$(document).ready(function () {
    $("#canvas").click(function () {
        window.addEventListener('click', () => {
            document.getElementById('video').muted = true
            document.getElementById('video').play();

            document.getElementById('audio').muted = false
            document.getElementById('audio').play();


        })

        $("#ting").trigger('play');
        $(".gift").hide('fade', 1200);
        $(".page1").hide('fade', 1500);
        setTimeout(() => {
            $('.page2').show();
            // $('#video').trigger('play');
            // $('#video').trigger('muted');

            setText()
        }, 2000);
    });



});


function setText() {
    $('#audio').trigger('play');
    let time = 2100;
    $('#box-text').empty();
    const textVN = `Người đàn ông quên ngày 20/10 là người vô tâm. Trước đây anh từng vô tâm khi nghĩ một lời chúc không quan trọng.`;
    const textEN = `Nhưng giờ thì anh đã hiểu, một lời nói còn giá trị hơn hàng vạn món quà`;
    const strEnd = 'Chúc vợ của anh mãi xinh đẹp, trẻ trung, có sức khỏe. Yêu em nhiều!'
    const arrStr = textVN.split(' ');
    const arrStr2 = textEN.split(' ');
    const arrStr3 = strEnd.split(' ');

    setTimeout(() => {
        arrStr.forEach(str => {
            time += 200;
            $('#box-text').append('<span>' + str + '&nbsp;</span>');
        });
        setTimeout(() => {
            time = 10000;
            $('#box-text').hide('slow');

            setTimeout(() => {
                time += 50;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr2.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 600);

            setTimeout(() => {
                // time += 50;
                $('#box-text').empty();
                $('#box-text').show('slow');
                arrStr3.forEach(str => {
                    $('#box-text').append('<span>' + str + '&nbsp;</span>');
                });
            }, 600);

            setTimeout(() => {
                $(".gift").show('fade', 1200);
                $(".page1").show('fade', 1500);
                $('.page2').hide('fade', 300);
                document.getElementById('audio').stop();
            }, 30000);

        }, time);
    }, 500);
}