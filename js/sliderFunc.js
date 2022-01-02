let sliderFactory = {
    createSlider: function() {
        let newSlider = {
            imagesUrls: [],
            projectsUrls: [], //ссылки на проекты в гитлаб
            currentProjectIndex: 0,
            currentImageIndex: 0,
            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,
            slideLink: null,
        
            start: function(elId) {
                
                let that = this;
        
                let elSelector = '#' + elId;
                let el = document.querySelector(elSelector);
                
        
                this.showPrevBtn = el.querySelector('.btn-left');
                this.showNextBtn = el.querySelector('.btn-right');
                this.slideImage = el.querySelector('.slide-image');
                this.slideLink = el.querySelector('.slider-link');
        
                this.showPrevBtn.addEventListener('click', function(e) {
                    that.onShowPrevBtnClick(e);
        
                });
                this.showNextBtn.addEventListener('click', function(e) {
                    that.onShowNextBtnClick(e);
                });
        
                this.imagesUrls.push('https://itproger.com/img/courses/1476977754.jpg');
                this.imagesUrls.push('https://www.jsexpert.net/wp-content/uploads/2019/03/HTML5-y-CSS.jpg');
                

                this.projectsUrls.push('https://gitlab.skillbox.ru/artiom_svetilov/JS');
                this.projectsUrls.push('https://gitlab.skillbox.ru/artiom_svetilov/weblayout');
        
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];

                this.slideLink.href = this.projectsUrls[this.currentProjectIndex];
                this.currentImageIndex = this.currentProjectIndex;
                this.showPrevBtn.disabled = true;
            },
            onShowPrevBtnClick: function(e) {
                this.currentImageIndex--;
                this.currentProjectIndex --;
                
                this.showNextBtn.disabled = false;
            
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.slideLink.href = this.projectsUrls[this.currentProjectIndex];
                if(this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            
            },
            onShowNextBtnClick: function(e) {
                this.currentImageIndex++;
                this.currentProjectIndex ++;
                
                this.showPrevBtn.disabled = false;
                
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.slideLink.href = this.projectsUrls[this.currentProjectIndex];
                if(this.currentImageIndex === this.imagesUrls.length - 1) {
                    this.showNextBtn.disabled = true;
                }
            
            },
        };
        return newSlider;
    }
};

