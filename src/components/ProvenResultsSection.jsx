export default function ProvenResultsSection() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-rose-50/60 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-2xl md:text-3xl text-gray-900 mb-4">
                        Proven Results. Lasting Relief.
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                        <span className="font-semibold text-gray-900">20,000+ women</span> have found relief through our personalized homeopathic approach.
                        Our doctors have successfully treated these conditions with <span className="font-semibold text-femure-primary">90% satisfaction</span>.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-femure-primary mb-2">90%</div>
                            <p className="text-gray-700 font-medium">see improvement in 3 months</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-femure-primary mb-2">Zero</div>
                            <p className="text-gray-700 font-medium">side effects</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-femure-primary mb-2">100%</div>
                            <p className="text-gray-700 font-medium">personalized</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
