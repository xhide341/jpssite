export interface CommitteeMember {
  name: string;
  position: string;
  image: string;
  socials: {
    facebook?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    email: string;
  };
}

export const committeeMembers: CommitteeMember[] = [
  {
    name: "Darren De Belen",
    position: "President",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Darren",
    socials: {
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      email: "jane.smith@example.com"
    }
  },
  {
    name: "Sarah Chen",
    position: "Vice President",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Sarah",
    socials: {
      github: "https://github.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah.chen@example.com"
    }
  },
  {
    name: "Michael Rodriguez",
    position: "Secretary",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Michael",
    socials: {
      facebook: "https://facebook.com/mrodriguez",
      instagram: "https://instagram.com/mrodriguez",
      email: "m.rodriguez@example.com"
    }
  },
  {
    name: "Emily Patel",
    position: "Treasurer",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Emily",
    socials: {
      github: "https://github.com/epatel",
      twitter: "https://twitter.com/epatel",
      email: "emily.patel@example.com"
    }
  },
  {
    name: "James Wilson",
    position: "Events Coordinator",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=James",
    socials: {
      facebook: "https://facebook.com/jwilson",
      instagram: "https://instagram.com/jwilson",
      github: "https://github.com/jwilson",
      email: "j.wilson@example.com"
    }
  },
  {
    name: "Lisa Kim",
    position: "Marketing Director",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Lisa",
    socials: {
      twitter: "https://twitter.com/lisakim",
      instagram: "https://instagram.com/lisakim",
      email: "lisa.kim@example.com"
    }
  },
  {
    name: "Alex Thompson",
    position: "Technical Lead",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Alex",
    socials: {
      github: "https://github.com/alexthompson",
      twitter: "https://twitter.com/alexthompson",
      email: "alex.thompson@example.com"
    }
  },
  {
    name: "Sophie Martinez",
    position: "Community Manager",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Sophie",
    socials: {
      facebook: "https://facebook.com/sophiem",
      instagram: "https://instagram.com/sophiem",
      twitter: "https://twitter.com/sophiem",
      email: "sophie.m@example.com"
    }
  }
]; 