import React from "react";

// Landing Page - Syntesys (futuristic visual, GitHub Pages ready)

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 antialiased font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold tracking-tight">SY</div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Syntesys</h1>
              <p className="text-xs text-gray-400">Soluções Inteligentes em Tecnologia</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-cyan-400 transition">Serviços</a>
            <a href="#process" className="hover:text-cyan-400 transition">Como trabalhamos</a>
            <a href="#cases" className="hover:text-cyan-400 transition">Cases</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contato</a>
            <a href="tel:+5519996210076" className="bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 rounded-md text-white font-medium shadow-md">Ligar</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_70%)]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Conectamos <span className="text-cyan-400">Tecnologia</span> e <span className="text-indigo-400">Performance</span> para impulsionar seu negócio.
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Na Syntesys, unimos design, automação e infraestrutura em nuvem para criar soluções inteligentes que escalam com sua empresa.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition">Solicitar Orçamento</a>
              <a href="#services" className="border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition">Explorar Serviços</a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-cyan-900/20 border border-gray-800 flex items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-32 h-32 text-cyan-400/80">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-6v4a1 1 0 01-1 1h-3M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M7 21h10M7 16h10" />
              </svg>
            </div>
            <div className="absolute -bottom-8 left-8 bg-gray-900/90 p-4 rounded-xl border border-gray-800 backdrop-blur-sm">
              <p className="text-sm text-gray-400">Pacote Web + Cloud + Automação</p>
              <p className="text-lg font-semibold text-cyan-400">A partir de R$ 1.399</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold">Serviços</h3>
        <p className="mt-2 text-gray-400">Infraestrutura moderna, automação inteligente e performance em nuvem.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Criação de Sites Futuristas', desc:'Landing pages e sites rápidos, integrados e otimizados.'},
            {title:'Automação de Processos', desc:'Sistemas que eliminam tarefas manuais e reduzem erros.'},
            {title:'Cloud & DevOps', desc:'Pipelines CI/CD, containers e monitoramento contínuo.'},
            {title:'Desenvolvimento de Sistemas', desc:'APIs e aplicações web de alto desempenho.'},
            {title:'Gestão de Projetos em TI', desc:'Planejamento ágil para implantação e integração de sistemas.'},
            {title:'Suporte Técnico e Redes', desc:'Manutenção, configuração e segurança corporativa.'}
          ].map((s,i)=>(
            <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition">
              <h4 className="font-semibold text-cyan-400">{s.title}</h4>
              <p className="mt-3 text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">Entre em contato</h3>
            <p className="mt-4 text-gray-400">Solicite um orçamento e receba retorno em até 48 horas úteis.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li><strong>Telefone:</strong> <a href="tel:+5519996210076" className="text-cyan-400">+55 19 99621-0076</a></li>
              <li><strong>Email:</strong> <a href="mailto:contato@syntesys.tech" className="text-cyan-400">contato@syntesys.tech</a></li>
              <li><strong>Atendimento:</strong> Segunda a Sexta, 9h às 18h</li>
            </ul>
          </div>
          <form className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 space-y-4">
            <input className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500" placeholder="Nome" />
            <input className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500" placeholder="Empresa" />
            <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200">
              <option>Selecione um serviço</option>
              <option>Criação de site</option>
              <option>Automação</option>
              <option>Cloud / DevOps</option>
              <option>Suporte técnico</option>
            </select>
            <textarea className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500" rows="4" placeholder="Mensagem"></textarea>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-md font-semibold hover:scale-[1.02] transition">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Syntesys — Soluções em TI Futuristas.
      </footer>
    </div>
  );
}
