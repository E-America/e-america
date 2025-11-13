import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            A Digital Experiment in Freedom
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              There is America the physical place. And there is America the idea, the idea of free people.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              <strong>e-America is that idea, reborn for the digital age.</strong>
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              e-America is a parallel digital America, an experiment in building government as a service 
              for a borderless digital world. It is not a replacement for any existing nation. It is a 
              parallel, digital America built on values, not geography, open to anyone who believes in 
              liberty, equality, and the rule of law.
            </p>

            <div className="bg-muted/50 p-8 rounded-xl my-8">
              <h3 className="text-2xl font-bold mb-4">₿ Bitcoin in e-America</h3>
              <p className="text-muted-foreground leading-relaxed">
                At the heart of the e-America economy is Bitcoin, the first and only truly neutral global money. 
                Bitcoin represents economic independence, transparency, and borderless inclusion where anyone can participate.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-xl my-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">📜 The American Constitution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Constitution of the United States is the foundation of e-America. Every e-American commits 
                to uphold its values of justice, liberty, and the pursuit of happiness.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                "We the People of the United States, in Order to form a more perfect Union, establish Justice, 
                insure domestic Tranquility, provide for the common defence, promote the general Welfare, and 
                secure the Blessings of Liberty to ourselves and our Posterity..."
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <Link to="/apply">
              <Button 
                size="lg" 
                className="bg-gradient-ea text-white hover:opacity-90 font-semibold rounded-full px-12 py-6 text-lg shadow-xl"
              >
                Become an e-American Citizen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
