interface Server {
  serverId: string;
  displayName: string;
}

const servers: readonly Server[] = [
  {
    serverId: 'none',
    displayName: 'None',
  },
  {
    serverId: 'legends',
    displayName: 'Legends',
  },
  {
    serverId: 'basilisk',
    displayName: 'Basilisk',
  },
  {
    serverId: 'livemap',
    displayName: 'Redemption',
  },
];

export default servers;
