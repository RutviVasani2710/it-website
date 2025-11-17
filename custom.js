   const defaultConfig = {
      hero_title: "Innovate. Transform. Succeed.",
      hero_subtitle: "Empowering businesses with cutting-edge technology solutions that drive growth and digital transformation",
      hero_cta_primary: "Start Your Journey",
      hero_cta_secondary: "View Our Work",
      stat_1_number: "850",
      stat_1_label: "Projects Delivered",
      stat_2_number: "350",
      stat_2_label: "Global Clients",
      stat_3_number: "98",
      stat_3_label: "Success Rate %",
      stat_4_number: "120",
      stat_4_label: "Expert Team",
      services_title: "Premium IT Solutions",
      services_subtitle: "Comprehensive technology services designed to elevate your business",
      contact_title: "Let's Build Something Amazing Together",
      contact_subtitle: "Ready to transform your business? Connect with our team today",
      founder_name: "David Chen",
      founder_title: "Founder & CEO",
      founder_bio: "With over 15 years of experience in technology leadership and innovation, I'm passionate about helping businesses leverage cutting-edge technology to achieve their goals and drive sustainable growth.",
      footer_text: "Empowering businesses with innovative technology solutions that drive growth and digital transformation",
      background_color: "#0a0e27",
      surface_color: "#1a1f3a",
      text_color: "#e0e7ff",
      primary_action_color: "#6366f1",
      secondary_action_color: "#8b5cf6"
    };

    async function onConfigChange(config) {
      const heroTitle = document.getElementById('hero-title');
      heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
      heroTitle.style.color = '#ffffff';
      
      document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      document.getElementById('hero-cta-primary').textContent = config.hero_cta_primary || defaultConfig.hero_cta_primary;
      document.getElementById('hero-cta-secondary').textContent = config.hero_cta_secondary || defaultConfig.hero_cta_secondary;
      
      const stat1Counter = document.querySelector('#stat-1-number');
      stat1Counter.setAttribute('data-target', config.stat_1_number || defaultConfig.stat_1_number);
      document.getElementById('stat-1-label').textContent = config.stat_1_label || defaultConfig.stat_1_label;
      
      const stat2Counter = document.querySelector('#stat-2-number');
      stat2Counter.setAttribute('data-target', config.stat_2_number || defaultConfig.stat_2_number);
      document.getElementById('stat-2-label').textContent = config.stat_2_label || defaultConfig.stat_2_label;
      
      const stat3Counter = document.querySelector('#stat-3-number');
      stat3Counter.setAttribute('data-target', config.stat_3_number || defaultConfig.stat_3_number);
      document.getElementById('stat-3-label').textContent = config.stat_3_label || defaultConfig.stat_3_label;
      
      const stat4Counter = document.querySelector('#stat-4-number');
      stat4Counter.setAttribute('data-target', config.stat_4_number || defaultConfig.stat_4_number);
      document.getElementById('stat-4-label').textContent = config.stat_4_label || defaultConfig.stat_4_label;
      
      document.getElementById('services-title').textContent = config.services_title || defaultConfig.services_title;
      document.getElementById('services-subtitle').textContent = config.services_subtitle || defaultConfig.services_subtitle;
      document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
      document.getElementById('contact-subtitle').textContent = config.contact_subtitle || defaultConfig.contact_subtitle;
      document.getElementById('founder-name').textContent = config.founder_name || defaultConfig.founder_name;
      document.getElementById('founder-title').textContent = config.founder_title || defaultConfig.founder_title;
      document.getElementById('founder-bio').textContent = config.founder_bio || defaultConfig.founder_bio;
      document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
      
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const surfaceColor = config.surface_color || defaultConfig.surface_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
      const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
      
      document.querySelectorAll('.gradient-bg').forEach(el => {
        el.style.background = `linear-gradient(-45deg, ${backgroundColor}, ${primaryActionColor}, ${secondaryActionColor}, #4facfe)`;
        el.style.backgroundSize = '400% 400%';
      });
      
      document.querySelectorAll('.gradient-text').forEach(el => {
        el.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${primaryActionColor} 50%, ${secondaryActionColor} 100%)`;
        el.style.webkitBackgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
        el.style.backgroundClip = 'text';
      });
      
      document.querySelectorAll('.glass-card').forEach(el => {
        el.style.backgroundColor = surfaceColor;
      });
      
      document.querySelectorAll('.text-gray-900').forEach(el => {
        el.style.color = textColor;
      });
      
      document.getElementById('hero-cta-primary').style.backgroundColor = surfaceColor;
      document.getElementById('hero-cta-primary').style.color = primaryActionColor;
      
      document.querySelectorAll('.tab-button.active').forEach(el => {
        el.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${primaryActionColor} 100%)`;
      });
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_action_color || defaultConfig.primary_action_color,
              set: (value) => {
                config.primary_action_color = value;
                window.elementSdk.setConfig({ primary_action_color: value });
              }
            },
            {
              get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
              set: (value) => {
                config.secondary_action_color = value;
                window.elementSdk.setConfig({ secondary_action_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
          ["hero_title", config.hero_title || defaultConfig.hero_title],
          ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
          ["hero_cta_primary", config.hero_cta_primary || defaultConfig.hero_cta_primary],
          ["hero_cta_secondary", config.hero_cta_secondary || defaultConfig.hero_cta_secondary],
          ["stat_1_number", config.stat_1_number || defaultConfig.stat_1_number],
          ["stat_1_label", config.stat_1_label || defaultConfig.stat_1_label],
          ["stat_2_number", config.stat_2_number || defaultConfig.stat_2_number],
          ["stat_2_label", config.stat_2_label || defaultConfig.stat_2_label],
          ["stat_3_number", config.stat_3_number || defaultConfig.stat_3_number],
          ["stat_3_label", config.stat_3_label || defaultConfig.stat_3_label],
          ["stat_4_number", config.stat_4_number || defaultConfig.stat_4_number],
          ["stat_4_label", config.stat_4_label || defaultConfig.stat_4_label],
          ["services_title", config.services_title || defaultConfig.services_title],
          ["services_subtitle", config.services_subtitle || defaultConfig.services_subtitle],
          ["contact_title", config.contact_title || defaultConfig.contact_title],
          ["contact_subtitle", config.contact_subtitle || defaultConfig.contact_subtitle],
          ["founder_name", config.founder_name || defaultConfig.founder_name],
          ["founder_title", config.founder_title || defaultConfig.founder_title],
          ["founder_bio", config.founder_bio || defaultConfig.founder_bio],
          ["footer_text", config.footer_text || defaultConfig.footer_text]
        ])
      });
    }

    // Counter animation
    function animateCounter(element) {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target + (element.id.includes('stat-3') ? '%' : '+');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('counter') && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            animateCounter(entry.target);
          }
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glow-card, .counter, .animate-scale-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    // Technology tabs
    const techData = {
      frontend: [
        { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
        { name: 'Vue.js', icon: '💚', color: 'from-green-500 to-emerald-500' },
        { name: 'Angular', icon: '🅰️', color: 'from-red-500 to-pink-500' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-indigo-600' },
        { name: 'Tailwind', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' }
      ],
      backend: [
        { name: 'Node.js', icon: '💚', color: 'from-green-500 to-emerald-500' },
        { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-orange-500' },
        { name: 'Java', icon: '☕', color: 'from-orange-600 to-red-600' },
        { name: 'Go', icon: '🔷', color: 'from-cyan-500 to-blue-500' },
        { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-indigo-500' },
        { name: 'Ruby', icon: '💎', color: 'from-red-500 to-pink-500' }
      ],
      devops: [
        { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', icon: '☸️', color: 'from-blue-600 to-indigo-600' },
        { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
        { name: 'Jenkins', icon: '🔧', color: 'from-red-500 to-orange-500' },
        { name: 'GitLab', icon: '🦊', color: 'from-orange-600 to-red-600' },
        { name: 'Terraform', icon: '🏗️', color: 'from-purple-500 to-pink-500' }
      ],
      mobile: [
        { name: 'React Native', icon: '📱', color: 'from-blue-500 to-cyan-500' },
        { name: 'Flutter', icon: '🦋', color: 'from-blue-400 to-cyan-400' },
        { name: 'Swift', icon: '🍎', color: 'from-orange-500 to-red-500' },
        { name: 'Kotlin', icon: '🤖', color: 'from-purple-500 to-pink-500' },
        { name: 'Ionic', icon: '⚡', color: 'from-blue-600 to-indigo-600' },
        { name: 'Xamarin', icon: '🔷', color: 'from-indigo-500 to-purple-500' }
      ]
    };

    function renderTechBadges(category) {
      const container = document.getElementById('tech-content');
      container.innerHTML = '';
      techData[category].forEach((tech, index) => {
        const div = document.createElement('div');
        div.className = 'tech-badge bg-white p-6 rounded-2xl shadow-lg text-center';
        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)';
        div.innerHTML = `
          <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-3xl">
            ${tech.icon}
          </div>
          <div class="text-sm font-bold text-gray-700">${tech.name}</div>
        `;
        container.appendChild(div);
        
        setTimeout(() => {
          div.style.transition = 'all 0.5s ease-out';
          div.style.opacity = '1';
          div.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }

    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
          btn.classList.add('bg-white');
        });
        button.classList.add('active');
        button.classList.remove('bg-white');
        renderTechBadges(button.getAttribute('data-tab'));
      });
    });

    renderTechBadges('frontend');

    // Portfolio slider
    const portfolioSlider = document.getElementById('portfolio-slider');
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');

    sliderNext.addEventListener('click', () => {
      portfolioSlider.scrollBy({ left: portfolioSlider.offsetWidth / 2, behavior: 'smooth' });
    });

    sliderPrev.addEventListener('click', () => {
      portfolioSlider.scrollBy({ left: -portfolioSlider.offsetWidth / 2, behavior: 'smooth' });
    });

    // Testimonial auto-scroll
    const testimonialSlider = document.getElementById('testimonial-slider');
    let testimonialIndex = 0;

    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % 4;
      const scrollAmount = testimonialIndex * (testimonialSlider.scrollWidth / 4);
      testimonialSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 5000);

    // Contact form
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const messageDiv = document.getElementById('form-message');
      messageDiv.textContent = '✅ Thank you! We\'ll get back to you within 24 hours.';
      messageDiv.className = 'text-center p-4 rounded-xl bg-green-100 text-green-700 font-semibold';
      messageDiv.classList.remove('hidden');
      e.target.reset();
      setTimeout(() => {
        messageDiv.classList.add('hidden');
      }, 5000);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Close mobile menu when clicking a link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Create floating particles
    function createParticles() {
      const container = document.getElementById('particles-container');
      const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#fbbf24'];
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 8 + 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animation = `particle-float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.opacity = '0.3';
        container.appendChild(particle);
      }
    }

    createParticles();

    // Add parallax effect to hero section
    document.addEventListener('mousemove', (e) => {
      const hero = document.querySelector('#home');
      if (!hero) return;
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const blobs = hero.querySelectorAll('.blob-animated');
      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  