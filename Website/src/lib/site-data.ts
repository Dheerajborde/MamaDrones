export const assets = {
  prototype: "/pehelwan-prototype.webp",
  founderSession: "/founder-field-session.webp",
  heroFlight: "/mama-drone-sunset.jpg",
  communitySession: "/mama-community-session.jpg",
  communityDrone: "/mama-community-drone.jpg",
  trainingGroup: "/mama-drone-training-group-2026.jpg",
  farmDroneGroup: "/mama-farm-drone-group-2026.jpg",
  droneField: "https://res.cloudinary.com/dfly9upu9/image/upload/v1740153316/Pi7_Tool_drone-on-field_pcgtzg.jpg",
  spraying: "https://res.cloudinary.com/disoamdue/image/upload/v1750657615/DroneSpraying_chdqrp.jpg",
  fieldVisit: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183428/IMG_20250131_122113866_jkloaf.jpg",
  support: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741193415/IMG_9321_1_uvzyil.jpg",
  training: "https://res.cloudinary.com/dfly9upu9/image/upload/v1741183416/FullSizeRender-10_fuke34.jpg",
  repair: "https://res.cloudinary.com/dfly9upu9/image/upload/v1736740115/repairing_uokl10.jpg",
  kit10: "https://res.cloudinary.com/disoamdue/image/upload/v1750669758/10L_drone_1_hqdmkv.png",
  kit16: "https://res.cloudinary.com/dfly9upu9/image/upload/v1740068885/drone-folded_zxrrjd.png",
} as const;

// These four catalogue entries identify the product enquiries; current options
// and availability are confirmed directly with Mama.
export const drones = [
  { slug: "10l-drone", name: "10L agricultural drone", variant: "Without sensors", image: assets.droneField, imageAlt: "Agricultural drone in a green field" },
  { slug: "10l-drone-sensors", name: "10L agricultural drone", variant: "With sensors", image: assets.spraying, imageAlt: "Agricultural drone spraying crops in a field" },
  { slug: "10l-kit", name: "Mama Drones 10L Kit", variant: "Kit", image: assets.kit10, imageAlt: "Agricultural drone kit product image" },
  { slug: "16l-kit", name: "Mama Drones 16L Kit", variant: "Kit", image: assets.kit16, imageAlt: "Folded agricultural drone product image" },
] as const;

export const productForm = "https://docs.google.com/forms/d/e/1FAIpQLSdpDjN5SudOMl7jEDnG54EAVEoZiBelnPecw26mN8WDFXwE8w/viewform?usp=header";
