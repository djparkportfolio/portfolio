$(window).ready(function(){
	
	res_event();
	$(window).resize(function(){
		res_event();
	});

	function res_event(){
		var $box_w=$(".box").width();
		$(".box").css("height",$box_w);
	};
	
	$(".resume").hide();
	$(".contents").hide();

	function intro_event(){
		$(".contents").show();
		$(".bla_circle").addClass("circle_scale");
		$(".text").addClass("text_left");
		$(".a, .e, .o, .n, .g, .sp, .p, .aa, .r, .k").hide();
		setTimeout(function() {
			$(".intro").addClass("intro_left");
		}, 1700);
		setTimeout(function() {
			$(".intro>.resume_btn").addClass("show_resume");
		}, 2700);
		
		$(".clicktoenter").hide();
	};


	$(".bla_circle").click(function(){
		intro_event();
	});

	
	$(".text").click(function(){
		intro_event();
	});

	$(".clicktoenter").click(function(){
		intro_event();
	});	


	$(".resume_btn").mouseover(function(){
		$(this).text("Resume");
	});
	$(".resume_btn").mouseleave(function(){
		$(this).text("Click for Resume");
	});
	$(".resume_btn").click(function(){
		$(".resume").show();

		$(".resume").addClass("move_resume");
		window.scrollTo(0,0); //스크롤 최상단으로 이동
		$(".contents").hide();
	});
	$(".close_btn").click(function(){
		$(".resume").removeClass("move_resume");
		$(".contents").show();
	});

/*resume contents*/

	var $contact=`<div class="table">
								<div class="tablecell">
									<p>dajeongpark.djpark@gmail.com</p>
								</div>
							</div>`;
	var $edu=`<div class="table">
						<div class="tablecell">
								<p>Pratt Institute, NYC</p>
								<p>Bachelor&#39;s Industrial Design 2015</p>
						</div>
					</div>`;


	var $skill=`<div class="icon_frame">
						<div class="icon">
							<div class="ps"></div>
							<div class="ai"></div>
							<div class="id"></div>
							<div class="ae"></div>
							<div class="as"></div>
							<div class="rhino"></div>
							<div class="cad"></div>
							<div class="sw"></div>
							<div class="key"></div>
						</div>
						<p class="detail">HTML   CSS   JavaScript   JQuery   Android Studio</p>
						<p class="detail">Rhino AutoCAD Solidworks Keyshot</p>
					</div>
					<ul class="skill">
						<li><a>Industrial design educated</a>
							<div>
								<p>Design automotive lightings, mirror, joysticks</p>
								<p>Rapid prototype</p>
								<p>&#51;D modeling & rendering</p>
								<p>Market research (5g, Autonomouse, Car share)</p>
								<p>Prepare &#102;or exhibition and manage onsite</p>
								<p>Participated &#105;n task force team</p>
								<p>Strategic plan &#102;or consumer research</p>
								<p>Design company brochure</p>
							</div>
						</li>
						<li><a>Architectural design experienced</a>
							<div>
								<p>Design proposal &#112;ackage</p>
								<p>Overlook upcoming biddings</p>
								<p>Consult clients</p>
								<p>Present installation strategy</p>
								<p>Advise appropriate materials</p>
								<p>Analyze schematic drawings</p>
								<p>&#51;D modeling & rendering</p>
								<p>Project management</p>
							</div>
						</li>
						<li><a>Pursuing visual design</a>
							<div>
								<p>Concept sketch</p>
								<p>UI &#47; UX design</p>
								<p>HTML, CSS, JS</p>
								<p>Wireframe and mock up</p>
								<p>Reponsive design from PC to mobile</p>
								<p>Brand development</p>
								<p>Style guide</p>
							</div>
						</li>
					</ul>`;

	var $experience=`<div class="ex">
									<ul class="ex_title">
										<li>
											<a class="sl">SL Corporation , Marketing designer</a>
										</li>
										<li>
											<a class="kpa">KPA Studio , Assistant Project Manager</a>
										</li>
										<li>
											<a class="photo">Photo Lab , Photo Lab Technician</a>
										</li>
										<li>
											<a class="wa">W.A. Entertainment , Assistant Designer</a>
										</li>
									</ul>
									<div class="ex_detail"></div>
								</div>`;

	var $resume_arr=[$contact, $edu, $skill, $experience];




	var $ex1=`<p class="ex_lgtxt">SL Corporation , Marketing designer</p>
					<p>Kyungsan, Korea, 2016 Dec - 2019 Apr</p>
					<p class="padding-bottom">1st tier automotive lighting, gear shifter, side mirrors, etc.</p>
					<p class="ex_mdtxt">&#8226; Automotive design: Design future-oriented automotive parts</p>
					<p class="padding-left">- Design head, rear lights for autonomous era</p>
					<p class="padding-left">- Design FEMs for electric cars</p>
					<p class="padding-left">- Market research on the latest trend </p>
					<p class="padding-left">(5g, car sharing, autonomous,electric)</p>
					<p class="padding-left">- Participate in Task Force for advanced product planning.</p>
					<p class="padding-left">- Prepare strategic plan for consumer research</p>
					<p class="ex_mdtxt">&#8226; Open Faucet : in-house strategic activity for advanced product planning</p>
					<p class="padding-left">- Design tookit, ideation sheet, Business Model Canvas</p>
					<p class="padding-left">- Design logo poster goods presentation for PR</p>
					<p class="padding-left">- Develop identity and branding</p>
					<p class="ex_mdtxt">&#8226;Exhibition : Prepare for annual exhibition participating at DIFA</p>
					<p class="padding-left">- Conceptualize annual theme</p>
					<p class="padding-left">- Design walls and exhibition materials</p>
					<p class="padding-left">- Manage exhibition on site</p>`;

	var $ex2=`<p>BLAHHHH2</p>
		<p>BLAHHHH2</p>
		<p>BLAHHHH2</p>
		<p>BLAHHHH2</p>
		<p>BLAHHHH2</p>`;

	var $ex3=`<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>
		<p>BLAHHHH3</p>`;

	var $ex4=`<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>
		<p>BLAHHHH4</p>`;

	var $ex_arr=[$ex1, $ex2, $ex3, $ex4];

	$(".menu>li>a").click(function(){
		$(".resume_cont").empty();
		$(".menu>li>a").css("border-bottom","5px solid transparent");
		var $bb = $(this).parents("li").index();
		console.log($bb);
		$(".resume_cont").append($resume_arr[$bb]);
		$(this).css("border-bottom","5px solid #fff");

		$(".skill>li").click(function(){
			$(".skill>li>a").removeClass("skill_active");
			$(".skill>li>div").hide();
			$(this).find("a").addClass("skill_active");
			$(this).find("div").show();
			return false;
		});
	});



	/*$(document).on("click", ".skill>li", function(){
		$(".skill>li>a").removeClass("skill_active");
		$(".skill>li>div").hide();
		$(this).find("a").addClass("skill_active");
		$(this).find("div").show();
		return false;
	});*/

	$(document).on("click", ".ex_title>li", function(){
		$(".ex_detail").hide();
		$(".ex_title").removeClass("ex_active");
		$(".ex_title>li>a").removeClass("ex_sel");

		$(this).parent(".ex_title").addClass("ex_active");
		$(this).find("a").addClass("ex_sel");
		$(".ex_detail").show();
		
		if($(".ex_title").hasClass("ex_active")){
			$(".sl").text("SL");
			$(".kpa").text("KPA");
			$(".photo").text("Photo Lab");
			$(".wa").text("W.A.");
			$(".ex_title>li>a").css({"padding":"0 0 10px 0", "background":"none"});
		}
		
		if($(".ex_title>li>a").hasClass("ex_sel")){
			$(".ex_detail").empty();
			var $aa = $(".ex_title>li>a.ex_sel").parents("li").index();
			console.log($aa);
			$(".ex_detail").append($ex_arr[$aa]);

		}

	});




});